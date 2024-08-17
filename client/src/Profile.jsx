import { useAuth } from "./AuthProvider";

export default function Profile() {
  const { user } = useAuth();

  return (
    <>
      <div>
        This is <b>{user.name}</b>&apos;s profile
      </div>
      <div>My email is {user.email}</div>
    </>
  );
}
