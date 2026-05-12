import { useEffect } from 'react';
import { Project } from '../Project/Project'
import './ProjectIterate.css'

export function ProjectIterate({ projectData, noProjectMatch, loading, isLoading }) {
    let serialNo = 1;

    useEffect(() => {
        isLoading(true)
        const timeout = setTimeout(() => {
            isLoading(false)
        }, 300)
        return () => clearTimeout(timeout)
    }, [projectData])

    return (
        loading === true ?
            <img className='loading-spinner' src="loading-spinner.gif" alt="loading-spinner" /> :
            <div className='project-container'>
                {projectData.map((data) => {
                    return (
                        <>
                            <Project
                                title={data.title}
                                pageLink={data.pageLink}
                                promoRef={data.promoRef}
                                serialNo={serialNo++}
                            />
                        </>
                    )
                })
                }
                {
                    noProjectMatch && <div className='no-project-error'>No project found</div>
                }
            </div>
    )
}