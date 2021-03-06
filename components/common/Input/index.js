export default function Input({ className, suffix, children, ...pass }) {
  return (
    <div
      className={`flex items-center px-4 py-6 border border-gray-neutral-200 bg-white-neutral-0 rounded-lg space-x-2  ${
        className || ""
      }`}
    >
      <input
        type="text"
        className="font-bold text-input1 text-black-neutral-1000 focus:outline-none placeholder-gray-neutral-300"
        {...pass}
      />

      {suffix ? <span className="text-input1 text-black-neutral-1000">{suffix}</span> : null}
    </div>
  )
}
