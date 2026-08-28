import { useState } from 'react'
import PropTypes from 'prop-types';


function Stats({ stat }) {
    
    const monthCt = stat.monthCt > 1000? (stat.monthCt/1000).toFixed(2)+"K": stat.monthCt.toString()
    const dayCt = stat.dayCt > 1000? (stat.dayCt/1000).toFixed(2)+"K": stat.dayCt.toString()
    const totalCt = stat.totalCt > 1000000? ((stat.totalCt/1000000).toFixed(2)+"M"):(stat.totalCt > 1000 ? (stat.totalCt/1000).toFixed(2)+"K":stat.totalCt.toString())
    const totalRelCt = stat.totalRelCt > 1000? (stat.totalRelCt/1000).toFixed(2)+"K": stat.totalRelCt.toString()
    return (
        <>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

              <div className="bg-white border border-outline-blue rounded-xl p-4 flex flex-col justify-between hover:border-secondary hover:shadow-[0_4px_8px_rgba(0,94,184,0.05)] transition-all h-32">
                <span className="font-meta-sm text-meta-sm text-secondary">Abstracts Parsed<br />This Month</span>
                <span className="font-display-lg text-display-lg text-tertiary">{monthCt}</span>
              </div>

              <div className="bg-white border border-outline-blue rounded-xl p-4 flex flex-col justify-between hover:border-secondary hover:shadow-[0_4px_8px_rgba(0,94,184,0.05)] transition-all h-32">
                <span className="font-meta-sm text-meta-sm text-secondary">Abstracts Parsed<br />Today</span>
                <span className="font-display-lg text-display-lg text-tertiary">{dayCt}</span>
              </div>

              <div className="bg-white border border-outline-blue rounded-xl p-4 flex flex-col justify-between hover:border-secondary hover:shadow-[0_4px_8px_rgba(0,94,184,0.05)] transition-all h-32 relative overflow-hidden group">
                <div className="absolute inset-0 bg-secondary-container/20 group-hover:bg-secondary-container/40 transition-colors"></div>
                <span className="font-meta-sm text-meta-sm text-primary-container relative z-10">Relevant Papers<br />Identified</span>
                <div className="flex items-center gap-2 relative z-10">
                  <span className="font-display-lg text-display-lg text-primary">{totalRelCt}</span>
                  <span className="material-symbols-outlined text-accent-teal text-xl" >verified</span>
                </div>
              </div>

              <div className="bg-white border border-outline-blue rounded-xl p-4 flex flex-col justify-between hover:border-secondary hover:shadow-[0_4px_8px_rgba(0,94,184,0.05)] transition-all h-32">
                <span className="font-meta-sm text-meta-sm text-secondary">Total Papers<br />Stored</span>
                <span className="font-display-lg text-display-lg text-tertiary">{totalCt}</span>
              </div>
            </div>


        </>
    )
}


Stats.propTypes = {
  stat: PropTypes.shape({
    monthCt: PropTypes.number.isRequired,
    dayCt : PropTypes.string.isRequired,
    totalCt : PropTypes.number.isRequired,
    totalRelCt : PropTypes.string.isRequired
  }).isRequired,
};
export default Stats
