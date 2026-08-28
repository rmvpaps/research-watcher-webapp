import { useState } from 'react'
import Login from '../components/login'
import Stats from '../components/stats'
import PropTypes from 'prop-types';
import { createFileRoute } from '@tanstack/react-router'
import configData from "../config.json";


function Librarian() {
  const { teamName, desc, githublink } = configData
  const stats = { monthCt: 800, dayCt: 98, totalRelCt: 46, totalCt: 3400 }
  return (
    <>
      <div classNameName='bg-white mx-auto w-full max-w-6xl flex-grow flex items-center justify-center p-margin-mobile md:p-gutter shadow-2xl'>

        <main className="flex-1 pt-16 flex flex-col h-screen overflow-hidden bg-surface relative">
      
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"></div>
          <div className="flex h-full w-full max-w-container-max mx-auto relative z-10">
       
            <div className="flex-1 flex flex-col w-full p-4 md:p-6 overflow-hidden">
        
              <div className="bg-surface-container-lowest border border-outline-blue rounded-xl p-4 mb-4 shadow-sm flex items-center justify-between shrink-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-on-primary">
                    <span className="material-symbols-outlined text-[24px]">smart_toy</span>
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-tertiary">Librarian Agent <span className="bg-accent-teal text-white text-[10px] px-2 py-0.5 rounded-full ml-2 uppercase font-label-caps tracking-wider align-middle">Experimental</span></h2>
                    <p className="font-meta-sm text-meta-sm text-on-surface-variant">RAG-powered analysis across 12,450 documents</p>
                  </div>
                </div>
                <div className="hidden sm:flex gap-2">
                  <button className="px-3 py-1.5 border border-outline-blue rounded text-secondary font-meta-sm text-meta-sm hover:border-secondary hover:bg-surface-container transition-colors flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">history</span> History
                  </button>
                  <button className="px-3 py-1.5 border border-outline-blue rounded text-secondary font-meta-sm text-meta-sm hover:border-secondary hover:bg-surface-container transition-colors flex items-center gap-1 md:hidden">
                    <span className="material-symbols-outlined text-[16px]">tune</span> Parameters
                  </button>
                </div>
              </div>
            
              <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-6 pb-4">
               
                <div className="flex justify-center my-4">
                  <div className="bg-surface-container text-on-surface-variant font-meta-sm text-meta-sm px-4 py-2 rounded-full border border-outline-blue">
                    Knowledge base synchronized. Ready for queries.
                  </div>
                </div>
               
                <div className="flex flex-col items-end gap-1">
                  <div className="bg-primary-container text-on-primary p-4 rounded-2xl rounded-tr-sm max-w-[85%] sm:max-w-[75%] shadow-sm font-body-lg text-body-lg">
                    Summarize the latest findings on solid-state battery degradation mechanisms from papers published in the last 6 months.
                  </div>
                  <span className="font-meta-sm text-meta-sm text-on-surface-variant mr-1">10:42 AM</span>
                </div>
      
                <div className="flex gap-4 max-w-[95%] sm:max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0 border border-outline-blue mt-1">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">smart_toy</span>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="bg-surface-container-lowest border border-outline-blue p-5 rounded-2xl rounded-tl-sm shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 mb-4 text-secondary font-meta-sm text-meta-sm">
                        <span className="material-symbols-outlined text-[16px] animate-spin">sync</span>
                        Analyzing 14 relevant documents...
                      </div>
                      <div className="font-body-lg text-body-lg text-on-surface space-y-4">
                        <p>Based on the recent literature (last 6 months), the degradation mechanisms in solid-state batteries (SSBs) are primarily categorized into three areas: chemo-mechanical failure, interface instability, and lithium dendrite propagation.</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Chemo-mechanical failure:</strong> Repeated volume changes during cycling lead to contact loss between the solid electrolyte and active materials. [1]</li>
                          <li><strong>Interface instability:</strong> Parasitic side reactions at the cathode/electrolyte interface form resistive interphases, significantly increasing internal resistance. [2, 3]</li>
                          <li><strong>Lithium dendrite propagation:</strong> Despite the mechanical strength of solid electrolytes, Li penetration through grain boundaries remains a critical failure mode at high current densities. [4]</li>
                        </ul>
                      </div>
                     
                      <div className="mt-6 bg-surface-container p-4 rounded-xl border border-outline-blue">
                        <h4 className="font-headline-sm text-headline-sm text-tertiary mb-3 flex items-center gap-2">
                          <span className="material-symbols-outlined text-[18px]">library_books</span> References
                        </h4>
                        <div className="space-y-3">
                          <div className="flex gap-3 items-start bg-surface-container-lowest p-2 rounded-lg border border-outline-variant hover:border-secondary transition-colors cursor-pointer">
                            <div className="bg-primary text-on-primary font-meta-sm text-meta-sm w-6 h-6 rounded flex items-center justify-center shrink-0">1</div>
                            <div>
                              <div className="font-meta-sm text-meta-sm font-semibold text-on-surface">Chemo-mechanical degradation in sulfide-based solid-state batteries</div>
                              <div className="text-[11px] text-on-surface-variant mt-1">Journal of Power Sources • 2023</div>
                            </div>
                          </div>
                          <div className="flex gap-3 items-start bg-surface-container-lowest p-2 rounded-lg border border-outline-variant hover:border-secondary transition-colors cursor-pointer">
                            <div className="bg-primary text-on-primary font-meta-sm text-meta-sm w-6 h-6 rounded flex items-center justify-center shrink-0">2</div>
                            <div>
                              <div className="font-meta-sm text-meta-sm font-semibold text-on-surface">Interfacial stability of oxide solid electrolytes</div>
                              <div className="text-[11px] text-on-surface-variant mt-1">Nature Energy • 2023</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 ml-2">
                      <span className="font-meta-sm text-meta-sm text-on-surface-variant">10:43 AM</span>
                      <button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-[16px]">thumb_up</span></button>
                      <button className="text-on-surface-variant hover:text-error transition-colors"><span className="material-symbols-outlined text-[16px]">thumb_down</span></button>
                      <button className="text-on-surface-variant hover:text-secondary transition-colors"><span className="material-symbols-outlined text-[16px]">content_copy</span></button>
                    </div>
                  </div>
                </div>
              </div>
           
              <div className="pt-4 bg-surface shrink-0 mt-auto">
                <div className="relative bg-surface-container-lowest rounded-xl border border-primary shadow-[0_2px_10px_-3px_rgba(0,94,184,0.1)] focus-within:ring-2 focus-within:ring-primary-container/20 transition-all">
                  <div className="flex items-center px-2 pt-2 pb-1 border-b border-outline-blue/50">
                    <button className="p-1.5 text-on-surface-variant hover:text-primary transition-colors rounded-lg hover:bg-surface-container flex items-center gap-1 font-meta-sm text-meta-sm">
                      <span className="material-symbols-outlined text-[18px]">add_circle</span> Add Context
                    </button>
                    <button className="p-1.5 text-on-surface-variant hover:text-primary transition-colors rounded-lg hover:bg-surface-container flex items-center gap-1 font-meta-sm text-meta-sm ml-2">
                      <span className="material-symbols-outlined text-[18px]">dataset</span> Specific DBs
                    </button>
                  </div>
                  <div className="flex items-end p-2">
                    <textarea className="w-full bg-transparent border-none focus:ring-0 resize-none font-body-lg text-body-lg text-on-surface placeholder:text-on-surface-variant py-2 px-3 max-h-32 scrollbar-hide" placeholder="Ask the Librarian Agent about your research..." rows="1"></textarea>
                    <button className="bg-primary text-on-primary p-2.5 rounded-lg ml-2 hover:bg-primary-container transition-colors shrink-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">send</span>
                    </button>
                  </div>
                </div>
                <div className="text-center mt-2 font-meta-sm text-meta-sm text-on-surface-variant">
                  Librarian Agent can make mistakes. Consider verifying important information.
                </div>
              </div>
            </div>
            <aside className="hidden md:flex flex-col w-80 bg-surface-container-low border-l border-outline-blue h-full overflow-y-auto scrollbar-hide shrink-0">
              <div className="p-4 border-b border-outline-blue sticky top-0 bg-surface-container-low z-10">
                <h3 className="font-headline-sm text-headline-sm text-tertiary flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">tune</span> Session Parameters
                </h3>
              </div>
              <div className="p-4 space-y-6">
      
                <div>
                  <label className="block font-meta-sm text-meta-sm text-on-surface-variant mb-2">Timeframe</label>
                  <select className="w-full bg-surface-container-lowest border border-outline-blue rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-primary focus:border-primary">
                    <option>Last 6 months</option>
                    <option>Last 1 year</option>
                    <option>Last 5 years</option>
                    <option>All time</option>
                  </select>
                </div>
   
                <div>
                  <label className="block font-meta-sm text-meta-sm text-on-surface-variant mb-2">Source Types</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 font-body-md text-body-md text-on-surface cursor-pointer">
                      <input checked="" className="rounded text-primary focus:ring-primary border-outline-blue" type="checkbox" />
                      Peer-reviewed Journals
                    </label>
                    <label className="flex items-center gap-2 font-body-md text-body-md text-on-surface cursor-pointer">
                      <input checked="" className="rounded text-primary focus:ring-primary border-outline-blue" type="checkbox" />
                      Preprints (ArXiv, etc.)
                    </label>
                    <label className="flex items-center gap-2 font-body-md text-body-md text-on-surface cursor-pointer">
                      <input className="rounded text-primary focus:ring-primary border-outline-blue" type="checkbox" />
                      Patents
                    </label>
                  </div>
                </div>
       
                <div>
                  <label className="block font-meta-sm text-meta-sm text-on-surface-variant mb-2">Detail Level</label>
                  <input className="w-full h-2 bg-outline-blue rounded-lg appearance-none cursor-pointer accent-primary" max="100" min="0" type="range" value="75" />
                  <div className="flex justify-between font-meta-sm text-[10px] text-on-surface-variant mt-1">
                    <span>Summary</span>
                    <span>Comprehensive</span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-outline-blue mt-auto">
                <h3 className="font-headline-sm text-headline-sm text-tertiary flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-[20px]">folder_open</span> Active Context
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-surface-container p-2 rounded-lg border border-outline-variant">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">description</span>
                      <span className="font-meta-sm text-meta-sm text-on-surface truncate">My_Project_Notes.pdf</span>
                    </div>
                    <button className="text-on-surface-variant hover:text-error transition-colors shrink-0">
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  </div>
                </div>
                <button className="w-full mt-4 border border-dashed border-outline hover:border-primary hover:bg-primary/5 text-secondary font-meta-sm text-meta-sm py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <span className="material-symbols-outlined text-[16px]">upload_file</span>
                  Upload Document
                </button>
              </div>
            </aside>
          </div>

        </main>
      </div>
    </>
  )
}

export const Route = createFileRoute('/librarian')({
  component: Librarian,
})



