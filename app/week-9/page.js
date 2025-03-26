"use client";

import { useUserAuth } from "./_utils/auth-context";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div>
      <h1 className="text-4xl">Shopping List App</h1>
      {!user ? (
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      ) : (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={firebaseSignOut}>Logout</button>
          <p><a href="/week-9/shopping-list">Go to Shopping List</a></p>
          </div>
      )}
    </div>
  );
};

export default LandingPage;
