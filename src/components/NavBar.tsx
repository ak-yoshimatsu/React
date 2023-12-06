import { NavLink } from 'react-router-dom'

const isCurrent = ({ isActive }: { isActive: boolean }) => isActive ? {
  color: 'red',
  fontWeight: 'bold',
} : {};

export default function NavBar() {
  return (
    <ul>
      <li><NavLink style={isCurrent} to='/'>Home</NavLink></li>
      <li><NavLink style={isCurrent} to='/photos'>Photos</NavLink></li>
    </ul>
  )
}
