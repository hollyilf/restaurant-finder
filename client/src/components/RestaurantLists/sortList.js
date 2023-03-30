//Sort the list first by highest overallRating and then by number of ratings
const sortList = ({ list }) => {
  const sortedList = list.sort((a, b) => {
    const aScore =
      a.grades.reduce((total, grade) => total + grade.score, 0) / a.grades.length;
    const bScore =
      b.grades.reduce((total, grade) => total + grade.score, 0) / b.grades.length;
    if (aScore !== bScore) {
      return bScore - aScore;
    }
    return b.grades.length - a.grades.length;
  });
  return sortedList;
};

export default sortList;
