const CategoryCard = (props) => {
  return (
    <div className="p-4 rounded-lg border shadow-lg m-4 dark:bg-slate-400 dark:border-0">
      <p>{props.title}</p>
    </div>
  );
};

export default CategoryCard;
