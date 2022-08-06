import PageHeader from "./common/pageHeader";
import { Link } from "react-router-dom";
const MyCards = () => {
  return (
    <>
      <PageHeader title={"My Cards"} description={"The list of your cards"} />

      <div className="row">
        <Link to="create-card">Create a new card</Link>
      </div>
    </>
  );
};

export default MyCards;
