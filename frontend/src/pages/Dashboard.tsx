import MainLayout from "../layouts/MainLayout";

type Props = {
  user: {
    name: string;
    email: string;
  };
  onLogout: () => void;
};

function Dashboard({
  user,
  onLogout,
}: Props) {

  return (

    <MainLayout
      user={user}
      onLogout={onLogout}
    >

      <div className="bg-white rounded-xl shadow-sm p-6">

        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to KNAV NAO Consultation Hub
        </p>

      </div>

    </MainLayout>

  );
}

export default Dashboard;