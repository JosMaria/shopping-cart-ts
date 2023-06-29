type PropsType = {
  viewCart: boolean
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header = ({ viewCart, setViewCart }: PropsType) => {
  return (
    <div>Header</div>
  )
}
