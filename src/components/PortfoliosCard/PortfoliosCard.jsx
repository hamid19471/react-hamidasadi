import { useNavigate, Link } from "react-router-dom";
import Button from "../../components/Button/Button";
const PortfoliosCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-secondray/80 p-4 rounded-lg">
      <Link to={`/works/${item.id}`}>
        <img
          src={
            import.meta.env.VITE_URL +
            item.attributes.featured.data.attributes.url
          }
          alt=""
          className="rounded-lg mb-[25px]"
        />
      </Link>
      <h1 className="font-semibold uppercase text-[23px] text-white/90 tracking-wider my-5">
        {item.attributes.companyName}
      </h1>
      <p className="text-content font-light tracking-wide text-white/80 mb-10">
        {item.attributes.shortDescription}
      </p>
      <div className="flex gap-5 mb-3">
        <Button
          name="read more"
          onClick={() => navigate(`/works/${item.id}`)}
        />
        <Link
          to={item.attributes.websiteAddress}
          rel="noreferrer"
          target={"_blank"}
        >
          <Button name="view project" primary="primary" />
        </Link>
      </div>
    </div>
  );
};

export default PortfoliosCard;
