function Layout(props) {
  return (
    <>
        <h3>Todo List</h3>
        <h3>React</h3>
        {props.children}
    </>
  )
}

export default Layout