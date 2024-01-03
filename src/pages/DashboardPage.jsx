import useAuth from '../hooks/useAuth'

const Dashboard = () => {
  const { auth } = useAuth()
  return (
    <div className="bg-blue-300 h-screen w-full flex flex-wrap">
    <h1 className="text-2xl text-blue">Hie44444mms</h1>
    </div>
  )
}

export default Dashboard