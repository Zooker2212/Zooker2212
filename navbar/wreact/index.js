export const Sidebar = props => {
    const { open, modules } = props;
  
    const onMouseEnter = useCallback(() => props.setMainMenuOpen(!open), []);
    const onMouseLeave = useCallback(() => props.setMainMenuOpen(open), []);
  
    return (
      <div
        open={setMainMenuOpen}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`navigation ${open ? 'navigation' : ''}`}
        data-test-id="navigation"
        tabIndex="-1"
      >
        {modules.map(module => (
          <SidebarItem key={module.id} module={module} />
        ))}
      </div>
    );
  };
