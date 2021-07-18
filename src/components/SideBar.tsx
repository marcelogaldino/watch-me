export function SideBar({ children }: any) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {children}
      </div>

    </nav>
  )
}