export default function CovidInfo() {
    return (
      <div className="relative bg-cover bg-center py-16" style={{backgroundImage: "url('/images/mountain-bg.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 text-white">
          <h2 className="text-3xl font-bold mb-4">인생은 산을 오르는 것과 같다</h2>
          <p className="mb-8">정상에 도달하는 것보다 그 과정에서 얻는 경험이 더 값지다. 우리는 여러분의 안전한 여정을 위해 최선을 다하고 있습니다.</p>
          <button className="btn btn-secondary">우리의 약속 읽기</button>
        </div>
      </div>
    )
  }