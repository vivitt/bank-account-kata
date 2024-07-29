import React from "react";
import { ReactNode, useEffect, useState } from "react";
import { PropsWithpanelren } from "react";

type Props = {
  panels: { id: string; header: string; content: ReactNode }[];
  // eslint-disable-next-line no-unused-vars
  renderPanels: (id: string, content: ReactNode) => React.JSX.Element;
};

export default function ActionPanelGroup(props: PropsWithpanelren<Props>) {
  const [currentPanel, setCurrentPanel] = useState("Deposit");

  const handleClick = (e: React.UIEvent<HTMLButtonElement>) => {
    setCurrentPanel(e.currentTarget.innerHTML);
  };

  useEffect(() => {
    const editButton = document.getElementsByTagName("button")[0];
    editButton.setAttribute("aria-pressed", "true");
  }, []);

  return (
    <div className="min-w-full h-64">
      <div
        role="toolbar"
        aria-label="Account management options"
        className="flex bg-indigo-50 align-center justify-evenly"
      >
        {props.panels.map((panel) => (
          <div key={`${panel.id}-panel`}>
            <button
              onClick={(e) => handleClick(e)}
              className="px-3 py-3 rounded text-left text-xs font-medium text-gray-400 uppercase tracking-wider aria-pressed:text-slate-800 aria-pressed:border aria-pressed:border-indigo-200 min-h-full"
              key={`${panel.id}-button`}
              aria-pressed={currentPanel === panel.header}
            >
              {panel?.header}
            </button>
          </div>
        ))}
      </div>
      <div className=" px-6 py-4 bg-white">
        {props.panels.map((panel) => {
          if (currentPanel === panel.header) {
            return props.renderPanels(`${currentPanel}-panel`, panel?.content);
          }
        })}
      </div>
    </div>
  );
}
