import { Timeline, Button } from "flowbite-react";

export default function EducationTimeline() {
  return (
    <>
      <div className="p-5">
      <h3 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Your Education</span> </h3>
        <Timeline>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>February 2022</Timeline.Time>
              <Timeline.Title>
                Application UI code in Tailwind CSS
              </Timeline.Title>
              <Timeline.Body>
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </Timeline.Body>
              <Button color="gray">Learn More</Button>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
    </>
  );
}
