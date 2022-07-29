import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useCRUD } from '../hooks/CRUDProvider'
import CURDPagiantion from '../partials/Pagination'
import { CRUDTable } from '../partials/Table'

export default function ListPage() {
  const [data, setData] = useState<any[]>()
  const [params, setParams] = useState<any>({
    page: 1,
    limt: 10
  })
  const [pagination, setPagination] = useState<any>({})
  const {
    fetchList,
    columns
  } = useCRUD()

  const loadData = () => {
    fetchList(params)
      .then(response => {
        const { rows, ...pagination } = response
        setData(rows)
        setPagination(pagination)
      })
      .catch(e => {
        console.log(e)
      })
  }

  useEffect(() => {
    loadData()
  }, [params])

  const onPageChange = (page: number) => {
    setParams({
      ...params,
      page
    })
  }

  useEffect(() => {
    setTimeout(() => {
      onPageChange(5)
    }, 5000)
  }, [])

  const [searchParams, setSearchParams] = useSearchParams();
  const user = searchParams.get("search");
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function getGitHubUser() {
      const response = await fetch(`https://api.github.com/users/${user}`, {
        signal: abortController.signal,
      });
      if (!abortController.signal.aborted) {
        const data = await response.json();
        setUserData(data);
      }
    }

    if (user) {
      getGitHubUser();
    }

    return () => {
      abortController.abort();
    };
  }, [user]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newUser = formData.get("user") as string;
    if (!newUser) return;
    setSearchParams({ search: newUser });
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <input defaultValue={user ?? undefined} type="text" name="user" />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
      {userData && (
        <div
          style={{
            padding: "24px",
            margin: "24px 0",
            borderTop: "1px solid #eaeaea",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <img
            style={{ borderRadius: "50%" }}
            width={200}
            height={200}
            src={userData.avatar_url}
            alt={userData.login}
          />
          <div>
            <h2>{userData.name}</h2>
            <p>{userData.bio}</p>
          </div>
        </div>
      )}
      <CRUDTable columns={columns} dataSource={data} />
      <CURDPagiantion />
      <br /><br />
    </div>
  )
} 
