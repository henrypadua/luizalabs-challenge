import { twMerge } from 'tailwind-merge'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: Readonly<ContainerProps>) {
  return (
    <div className={twMerge('container m-auto px-5', className)}>
      {children}
    </div>
  )
}
