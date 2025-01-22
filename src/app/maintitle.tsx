
export function MainTitle({ title, subtitle }: { title: string; subtitle: string }) {
    return (
      <div>
        <div className="row-01 p-1">
          <div className="text-center">
            <span className="text-rose-400 text-opacity-60 tracking-widest">{title}</span>
          </div>
        </div>
  
        <div className="row-02">
          <div className="text-center">
            <span className="text-rose-400 font-gowun text-xl font-bold">{subtitle}</span>
          </div>
        </div>
      </div>
    );
  }