import moment from "moment";

const formatedDate = date => {
  return moment(date).format("Do MMMM YY [at] HH:MM");
};

export default formatedDate;
