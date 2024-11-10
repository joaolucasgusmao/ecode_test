const subscribeNewsletter = async (email: string) => {
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
};

export default subscribeNewsletter;
