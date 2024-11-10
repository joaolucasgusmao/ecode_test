const subscribeNewsletter = async (email: any) => {
  const response = await fetch(
    "https://api.frontend.ecode.digital/newsletter",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao se inscrever na newsletter");
  }

  const data = await response.json();
  return data;
};

export default subscribeNewsletter;
