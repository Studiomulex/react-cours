import PropTypes from "prop-types";
export default function Categories({
  setActiveCategory,
  categories,
  activeCategory,
}) {
  return (
    <div className="flex gap-1 m-1">
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="bg-red-500 rounded-md"
      >
        <option value="">---</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button
        onClick={() => setActiveCategory("")}
        className="bg-green-600 p-1 rounded-md"
      >
        Réinitialiser
      </button>
    </div>
  );
}

Categories.propTypes = {
  setActiveCategory: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.string.isRequired,
};
