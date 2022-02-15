import express, { Router } from 'express'
import path from 'path'
import sampleRouter from './sample'

const router = Router({ mergeParams: true })

router.use('/api/file', express.static(path.join(__dirname, '../../../uploads')))
router.use('/sample', sampleRouter)

export default router
