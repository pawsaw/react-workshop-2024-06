import { ReactElement, useState } from 'react';

export interface TabProps {
  children: React.ReactNode;
  title: string;
}

export const Tab: React.FC<TabProps> = () => {
  return null;
};

/**
 *
 * <tabs>
 *   <tab title="Tab 1">Hallo</tab>
 *   <tab title="Tab 2">Welt</tab>
 * </tabs>
 */

export interface TabsProps {
  children: ReactElement<TabProps>[];
}

export const Tabs: React.FC<TabsProps> = ({ children: tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div>
      <div className="tab_header">
        {tabs.map((tab, tabIndex) => (
          <button className="tab_header_item" onClick={() => setActiveTabIndex(tabIndex)}>
            {tab.props.title}
          </button>
        ))}
      </div>
      <div className="tab_content">
        {tabs.map((tab, tabIndex) => (
          <div
            className="tab_content_item"
            style={{
              display: activeTabIndex === tabIndex ? 'block' : 'none',
            }}
          >
            {tab.props.children}
          </div>
        ))}
      </div>
    </div>
  );
};
