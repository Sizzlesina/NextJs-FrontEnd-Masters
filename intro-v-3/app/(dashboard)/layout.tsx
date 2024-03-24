/** @format */

import NewTodoForm from "@/components/NewTodoForm";

const DashboardLayout = ({ children }: any) => {
  return (
    <div>
      <h1>dashboard</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default DashboardLayout;
