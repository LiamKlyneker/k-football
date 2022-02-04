export default function Select({ name, placeholder }) {
  return (
    <select name={name}>
      <option>{placeholder}</option>
    </select>
  );
}
