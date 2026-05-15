import MainLayout from "../layouts/MainLayout";

type Props = {
  user: {
    name: string;
    email: string;
  };
  onLogout: () => void;
};

export default function TeamMember({
  user,
  onLogout,
}: Props) {

  return (

    <MainLayout
      user={user}
      onLogout={onLogout}
    >

      <div className="bg-white rounded-2xl shadow-sm border p-6 min-h-[80vh]">

        <h1 className="text-3xl font-bold text-[#1F2A44]">
          Team Member
        </h1>

      </div>

    </MainLayout>

  );
}