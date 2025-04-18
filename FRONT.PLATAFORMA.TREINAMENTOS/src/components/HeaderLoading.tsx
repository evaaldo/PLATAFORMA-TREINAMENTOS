export function HeaderLoading() {
    return (
        <header className="flex w-full justify-between align-center py-2 border-b border-gray-600 px-6">
            <div className="flex items-center gap-4">
                <div className="text-transparent shimmer rounded w-10 h-10">a</div>
                <h1 className="text-2xl font-bold text-transparent shimmer rounded">Formação de SOLID</h1>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex flex-col text-center items-center gap-1">
                    <span className="text-transparent shimmer rounded w-20 h-4">Evaldo Rodrigues</span>
                    <span className="text-sm text-gray-700 text-transparent shimmer rounded w-10 h-3">Aluno</span>
                </div>
                <div className="rounded-full w-12 h-12 text-transparent shimmer"></div>
            </div>
        </header>
    )
}