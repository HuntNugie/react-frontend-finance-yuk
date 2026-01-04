export const Loading = ({wait}) => {
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-700">
                <div className="flex flex-col items-center gap-4">
                    {/* Spinner */}
                    <div className="w-14 h-14 border-4 border-white/30 border-t-white rounded-full animate-spin" />

                    {/* Text */}
                    <p className="text-white font-medium tracking-wide">Menyiapkan {wait ? wait : "Menu"}...</p>

                    {/* Brand */}
                    <span className="text-sm text-white/70">FinanceYuk • ngkCompany</span>
                </div>
            </div>
        </>
    );
};
