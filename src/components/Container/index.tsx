type ContainerProps = {
  children: React.ReactNode
}

export function Container({ children }: Readonly<ContainerProps>) {
  return <div className="container m-auto px-5">{children}</div>
}
