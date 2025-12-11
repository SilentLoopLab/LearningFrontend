import { useEffect, useState } from 'react';
import { ListUsers } from './components/ListUsers';
export default function App() {
  const [users, setUsers] = useState([]);
  const [action, setAction] = useState('');

  useEffect(() => {
    if (action === 'cancel') {
      setUsers([]);
      return;
    }
    if (action !== 'male') return;
    async function fetchMan() {
      const data = await fetch(
        'https://randomuser.me/api/?results=9&gender=male',
      );
      const res = await data.json();
      setUsers(res.results);
    }
    fetchMan();
  }, [action]);

  useEffect(() => {
    if (action === 'cancel') {
      setUsers([]);
      return;
    }
    if (action !== 'female') return;
    async function fetchFemale() {
      const data = await fetch(
        'https://randomuser.me/api/?results=9&gender=female',
      );
      const res = await data.json();
      setUsers(res.results);
    }
    fetchFemale();
  }, [action]);

  useEffect(() => {
    if (action === 'cancel') {
      setUsers([]);
      return;
    }
    if (action !== 'all') return;
    async function fetchAll() {
      const data = await fetch('https://randomuser.me/api/?results=9');
      const res = await data.json();
      setUsers(res.results);
    }
    fetchAll();
  }, [action]);
  return (
    <>
      <ListUsers users={users} action={action} onChange={setAction} />
    </>
  );
}
