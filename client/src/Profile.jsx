import { useAuth } from "./AuthProvider";

export default function Profile() {
  const { user } = useAuth();

  return (
    <>
      <div>
        This is <b>{user.user}</b> profile
      </div>
    </>
  );
}
