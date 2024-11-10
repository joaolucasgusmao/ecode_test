const fetchProfile = async () => {
  const response = await fetch("https://api.frontend.ecode.digital/profile");

  if (!response.ok) {
    throw new Error("Erro ao buscar dados do perfil");
  }

  const data = await response.json();
  return data;
};

export default fetchProfile;
