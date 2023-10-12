import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

  return (
    <>
      <div>
        <h1 className="text-center mt-3">TODOIST</h1>
        <h4 className="text-center mt-3">What are you doing today, {user.displayName}?</h4>
      </div>
      <div
        className="text-center d-flex flex-column w-25"
        style={{
          margin: '0 auto',
        }}
      >
        <form>
          <input
            type="text"
            className="input-box mt-3"
          />
          <Button type="submit" size="lg" id="submit-btn">ADD</Button>
        </form>
        <ul className="mt-3 task-list">
          <li>test</li>
        </ul>
      </div>
    </>
  );
}

export default Home;
