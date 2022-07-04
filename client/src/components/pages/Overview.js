import Restaurants from "../functionality/Restaurants";

import classes from './Overview.module.css';

const Overview = () => {
  return (
    <div className={classes.overview}>
      <Restaurants />
    </div>
  )
}
export default Overview