export default function RowBook({ number, values, selectBook }) {
  return (
    <tr
      onClick={selectBook}
      className="border-b hover:bg-gray-500/50 cursor-pointer"
    >
      <td className="p-2 text-center">{number}</td>

      {values.map((value, index) => (
        <td key={index} className="px-5 wrap-break-word">
          {value}
        </td>
      ))}
    </tr>
  );
}
