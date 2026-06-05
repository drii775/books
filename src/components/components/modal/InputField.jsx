export default function InputField({ id, label, type, value, onChange }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-1">
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="border border-red-300 px-3 py-2 w-full rounded focus:outline-none focus:border-red-700"
      />
    </div>
  );
}
