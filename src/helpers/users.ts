const addUserData = async (data: string) => {
  const response = await fetch("/api/report", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
  return response.json();
};

const fetchUserData = async (id: string) => {
  const response = await fetch(`/api/report/${id}`, { cache: "no-cache" });
  return response.json();
};

const fetchUserList = async () => {
  const response = await fetch("api/report-list", { cache: "no-cache" });
  return response.json();
};

export { addUserData, fetchUserData, fetchUserList };
