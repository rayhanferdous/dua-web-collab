export default function DuaText(props) {
  return (
    <a href={`/dua/${props.catId}/1#${props.duaId}`}>
      <div className="flex flex-row ">
        <img src="/assets/duaarrow.svg" className="-translate-y-1 mr-2" alt="" />
        <p className="font-inter text-2xs text-mute-grey my-3 text-left w-[95%] dark:text-[#8d9db4]">{props.name}</p>
      </div>
    </a>
  );
}
