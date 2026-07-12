import mockJobs from '~/mocks/jobs.json';

export default defineEventHandler(async (event) => {
  return mockJobs;
});
