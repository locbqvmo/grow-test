interface ProgressBarProps {
  total: number;
  progress: number;
}

export default function ProgressBar({ total, progress }: ProgressBarProps) {
  const percentage = Math.floor((progress / total) * 100);
  console.log(percentage);

  return (
    <div className="h-1 w-full bg-secondary">
      <div className="h-1 bg-primary" style={{ width: `${percentage}%` }} />
    </div>
  );
}
