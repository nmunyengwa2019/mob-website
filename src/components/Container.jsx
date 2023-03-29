import clsx from 'clsx'

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx('mx-auto   w-full ', className)}
      {...props}
    />
  )
}
