import type { ComponentType, SVGProps } from "react";

interface IObstacleCardProps {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const ObstacleCard = ({
  title,
  description,
  icon: Icon,
}: IObstacleCardProps) => {
  return (
    <article className="flex h-full min-h-50 flex-col items-center rounded-lg bg-white px-4 py-3 text-center shadow-[0_1px_8px_rgba(20,20,20,0.08)] border border-gray-100 lg:min-h-56 lg:py-6">
      <span className="flex text-primary [&_svg]:size-10 lg:[&_svg]:size-14">
        <Icon aria-hidden="true" />
      </span>

      <h3 className="mt-2 text-xs font-bold text-black-500 lg:mt-4">{title}</h3>

      <p className="mt-2 text-xs font-medium text-black-500">{description}</p>
    </article>
  );
};

export default ObstacleCard;
