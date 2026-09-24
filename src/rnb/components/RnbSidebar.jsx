import { useMemo, useState } from 'react';

import { ChevronLeft, Menu, Phone, Search } from 'lucide-react';

import { useUser } from '../context/UserContext';

import { buildNavigation } from '../navigation/buildNav';

import RnbSidebarNav from './RnbSidebarNav';

import './RnbSidebar.css';



export default function RnbSidebar({

  expanded,

  isLg,

  expandedMenu,

  onExpandedChange,

  onExpandedMenuChange,

  onGrievanceOpen,

  onMobileNav,

}) {

  const { user } = useUser();

  const [query, setQuery] = useState('');



  const { sections, groups, searchItems } = useMemo(
    () => buildNavigation(user),
    [user],
  );



  const filteredSearch = useMemo(() => {

    const q = query.trim().toLowerCase();

    if (!q) return null;

    return searchItems.filter((item) => item.name?.toLowerCase().includes(q));

  }, [query, searchItems]);



  const isExpanded = expanded || !isLg;

  const isCollapsed = !expanded && isLg;

  function handleExpandFromNav(groupKey) {

    onExpandedChange(true);

    if (groupKey != null) {

      onExpandedMenuChange?.(groupKey);

      const open = JSON.parse(sessionStorage.getItem('rnb_sidebarOpenStates') || '{}');

      open[groupKey] = true;

      sessionStorage.setItem('rnb_sidebarOpenStates', JSON.stringify(open));

    }

  }



  const shellClass = [

    'rnb-sidebar',

    isLg ? (expanded ? ' is-expanded' : ' is-collapsed') : '',

    !isLg && expanded ? ' is-mobile-open' : '',

    !isLg ? ' is-mobile' : '',

  ].join('');



  return (

    <aside className={shellClass}>

      <div className="rnb-sidebar-overlay" aria-hidden />

      <div className="rnb-sidebar-inner">

        <div className="rnb-sidebar-top">

          <button

            type="button"

            className="rnb-sidebar-toggle"

            onClick={() => onExpandedChange(!expanded)}

            aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}

          >

            {isExpanded ? <ChevronLeft size={22} /> : <Menu size={22} />}

          </button>

          {isExpanded && (

            <div className="rnb-sidebar-search">

              <Search size={16} className="rnb-sidebar-search-icon" />

              <input

                type="search"

                placeholder="Search…"

                value={query}

                onChange={(e) => setQuery(e.target.value)}

              />

            </div>

          )}

        </div>



        <div className="rnb-sidebar-scroll">

          <RnbSidebarNav
            sections={filteredSearch ? [] : sections}
            groups={filteredSearch ? [] : groups}
            flatItems={filteredSearch || (query ? [] : null)}

            collapsed={isCollapsed}

            searchMode={Boolean(filteredSearch?.length)}

            expandedMenu={expandedMenu}

            onExpandSidebar={handleExpandFromNav}

            onExpandedMenuChange={onExpandedMenuChange}

            onMobileNav={onMobileNav}

          />

          {query && filteredSearch?.length === 0 && (

            <p className="rnb-sidebar-empty">No matches</p>

          )}

        </div>



        <footer className="rnb-sidebar-footer">

          {isExpanded ? (

            <>

              <div className="rnb-sidebar-phone">

                <span className="rnb-sidebar-phone-icon">

                  <Phone size={16} />

                </span>

                <div>

                  <span className="rnb-sidebar-phone-label">For Queries Call</span>

                  <a href="tel:+919714105866" className="rnb-sidebar-phone-number">

                    +91 9714105866

                  </a>

                </div>

              </div>

              <button type="button" className="rnb-sidebar-grievance" onClick={onGrievanceOpen}>

                Register Grievance

              </button>

            </>

          ) : (

            <button

              type="button"

              className="rnb-sidebar-toggle rnb-sidebar-phone-collapsed"

              title="For Queries: +91 9714105866"

              onClick={() => onExpandedChange(true)}

            >

              <Phone size={18} />

            </button>

          )}

        </footer>

      </div>

    </aside>

  );

}

