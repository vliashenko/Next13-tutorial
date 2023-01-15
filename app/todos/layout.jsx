import TodosList from "./TodosList";

export default function RootLayout({ children }) {
    return (
      <main style={{display: 'flex'}}>
        <div>
            <TodosList/>
        </div>
        <div style={{flex: 1}}>
            {children}
        </div>
      </main>
    )
  }
  