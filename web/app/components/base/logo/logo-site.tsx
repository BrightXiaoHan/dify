import type { FC } from 'react'
import classNames from 'classnames'

type LogoSiteProps = {
  className?: string
}

const LogoSite: FC<LogoSiteProps> = ({
  className,
}) => {
  return (
    // <img
    //   src='/logo/logo-site.png'
    //   className={classNames('block w-auto h-10', className)}
    //   alt='logo'
    // />
    <h1 style={{ fontFamily: '微软雅黑' }}>法律知识智能体平台</h1>
  )
}

export default LogoSite
