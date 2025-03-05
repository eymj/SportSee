import "./UserInfos.css";
import useUserInfos from "../hooks/useUserInfos";

function UserInfos() {
  const { data, error } = useUserInfos();

  if (!data && !error) {
    return (
      <div className="user-infos">
        <div className="loading">Chargement des informations utilisateur...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="user-infos">
        <div className="error">
          Erreur pendant la récupération des informations utilisateur
        </div>
      </div>
    );
  }

  return (
    <div className="user-infos">
      <div className="greet">Bonjour <span className="red">{data.firstName}</span></div>
      <div className="greet-subtitle">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </div>
    </div>
  );
}

export default UserInfos;
